import { useEffect, useState } from 'react'
import { cn } from '../../utils/helpers'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

export type NotificationType = 'success' | 'error' | 'info' | 'warning'

export interface Notification {
  id: string
  message: string
  type: NotificationType
  duration?: number
}

interface NotificationProps {
  notification: Notification
  onRemove: (id: string) => void
}

function NotificationItem({ notification, onRemove }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 10)

    // Auto remove after duration
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onRemove(notification.id), 300) // Wait for fade out
    }, notification.duration || 5000)

    return () => clearTimeout(timer)
  }, [notification.id, notification.duration, onRemove])

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle
  }

  const styles = {
    success: {
      bg: 'bg-green-500/20',
      border: 'border-green-500/50',
      text: 'text-green-200',
      icon: 'text-green-400'
    },
    error: {
      bg: 'bg-red-500/20',
      border: 'border-red-500/50',
      text: 'text-red-200',
      icon: 'text-red-400'
    },
    info: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/50',
      text: 'text-blue-200',
      icon: 'text-blue-400'
    },
    warning: {
      bg: 'bg-yellow-500/20',
      border: 'border-yellow-500/50',
      text: 'text-yellow-200',
      icon: 'text-yellow-400'
    }
  }

  const Icon = icons[notification.type]
  const style = styles[notification.type]

  return (
    <div
      className={cn(
        "min-w-[300px] max-w-md",
        "p-4 rounded-lg",
        "backdrop-blur-sm",
        style.bg,
        style.border,
        "border shadow-lg",
        "transform transition-all duration-300",
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0",
        "pointer-events-auto"
      )}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", style.icon)} />
        <div className="flex-1">
          <p className={cn("text-sm font-medium", style.text)}>
            {notification.message}
          </p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(() => onRemove(notification.id), 300)
          }}
          className={cn(
            "flex-shrink-0",
            "hover:opacity-70",
            "transition-opacity",
            style.text
          )}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

interface NotificationContainerProps {
  notifications: Notification[]
  onRemove: (id: string) => void
}

export function NotificationContainer({ notifications, onRemove }: NotificationContainerProps) {
  if (notifications.length === 0) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50",
        "flex flex-col gap-3",
        "pointer-events-none"
      )}
    >
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

// Hook for managing notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (
    message: string,
    type: NotificationType = 'info',
    duration?: number
  ) => {
    const id = Math.random().toString(36).substring(7)
    const notification: Notification = {
      id,
      message,
      type,
      duration
    }
    setNotifications((prev) => [...prev, notification])
    return id
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll
  }
}

