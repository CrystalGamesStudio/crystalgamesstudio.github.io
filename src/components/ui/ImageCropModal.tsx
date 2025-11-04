import { useState, useRef, useCallback } from 'react'
import ReactCrop, { Crop, PixelCrop, makeAspectCrop, centerCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { cn } from '../../utils/helpers'
import { X, Check } from 'lucide-react'
import { pixelBorder, gameButton } from '../../utils/game-effects'

interface ImageCropModalProps {
  imageSrc: string
  onCropComplete: (croppedImageBlob: Blob) => void
  onCancel: () => void
}

export function ImageCropModal({ imageSrc, onCropComplete, onCancel }: ImageCropModalProps) {
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const imgRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget
    const crop = makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      1,
      width,
      height
    )
    setCrop(centerCrop(crop, width, height))
  }

  const getCroppedImg = useCallback(async () => {
    if (!completedCrop || !imgRef.current || !canvasRef.current) {
      return
    }

    const image = imgRef.current
    const canvas = canvasRef.current
    const crop = completedCrop

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      return
    }

    const pixelRatio = window.devicePixelRatio
    canvas.width = crop.width * scaleX * pixelRatio
    canvas.height = crop.height * scaleY * pixelRatio

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    ctx.imageSmoothingQuality = 'high'

    const cropX = crop.x * scaleX
    const cropY = crop.y * scaleY

    ctx.drawImage(
      image,
      cropX,
      cropY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    )

    return new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob)
        }
      }, 'image/jpeg', 0.95)
    })
  }, [completedCrop])

  const handleCrop = async () => {
    const croppedBlob = await getCroppedImg()
    if (croppedBlob) {
      onCropComplete(croppedBlob)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className={cn(
        "relative bg-gray-900 rounded-xl",
        "border border-indigo-500/30",
        "shadow-2xl",
        "p-6 max-w-2xl w-full mx-4",
        "max-h-[90vh] overflow-auto"
      )}>
        <div className="flex items-center justify-between mb-4">
          <h2 className={cn(
            "text-2xl font-bold",
            "bg-gradient-to-r from-indigo-400 to-purple-400",
            "bg-clip-text text-transparent"
          )}>
            Crop Profile Photo
          </h2>
          <button
            onClick={onCancel}
            className={cn(
              "p-2 rounded-lg",
              "hover:bg-gray-800",
              "text-gray-400 hover:text-white",
              "transition-colors"
            )}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          {imageSrc && (
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={1}
              minWidth={200}
              minHeight={200}
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imageSrc}
                style={{ maxWidth: '100%', maxHeight: '70vh' }}
                onLoad={onImageLoad}
                className="rounded-lg"
              />
            </ReactCrop>
          )}
        </div>

        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        />

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className={cn(
              "px-4 py-2 rounded-lg",
              "bg-gray-700 hover:bg-gray-600",
              "text-white font-medium",
              "transition-all duration-300",
              pixelBorder,
              gameButton
            )}
          >
            Cancel
          </button>
          <button
            onClick={handleCrop}
            disabled={!completedCrop}
            className={cn(
              "px-4 py-2 rounded-lg",
              "bg-gradient-to-r from-indigo-600 to-purple-600",
              "text-white font-medium",
              "hover:from-indigo-500 hover:to-purple-500",
              "transition-all duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              pixelBorder,
              gameButton,
              "flex items-center gap-2"
            )}
          >
            <Check className="h-4 w-4" />
            Crop & Save
          </button>
        </div>
      </div>
    </div>
  )
}

