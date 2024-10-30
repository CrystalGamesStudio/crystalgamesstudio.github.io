/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.8 },
                },
                glow: {
                    '0%, 100%': {
                        filter: 'brightness(1)',
                        transform: 'scale(1)',
                    },
                    '50%': {
                        filter: 'brightness(1.2)',
                        transform: 'scale(1.05)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-5px)',
                    },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                pixelate: {
                    '0%': { filter: 'brightness(1) contrast(100%)' },
                    '50%': { filter: 'brightness(1.2) contrast(120%)' },
                    '100%': { filter: 'brightness(1) contrast(100%)' },
                },
                shine: {
                    '100%': { transform: 'translateX(200%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                },
                energyPulse: {
                    '0%': { transform: 'scale(1)', opacity: '0.4' },
                    '50%': { transform: 'scale(1.2)', opacity: '0.2' },
                    '100%': { transform: 'scale(1)', opacity: '0.4' },
                },
                cyberpunkGlow: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '200% 200%' },
                },
            },
            animation: {
                pulse: 'pulse 2s ease-in-out infinite',
                glow: 'glow 1.5s ease-in-out infinite',
                float: 'float 3s ease-in-out infinite',
                scanline: 'scanline 8s linear infinite',
                pixelate: 'pixelate 2s ease-in-out infinite',
                shine: 'shine 2s linear infinite',
                fadeIn: 'fadeIn 0.3s ease-in-out',
                glitch: 'glitch 3s infinite',
                energyPulse: 'energyPulse 4s ease-in-out infinite',
                cyberpunkGlow: 'cyberpunkGlow 8s linear infinite',
            },
            boxShadow: {
                'neon': '0 0 5px theme(colors.indigo.400), 0 0 20px theme(colors.indigo.600)',
                'neon-hover': '0 0 10px theme(colors.indigo.400), 0 0 40px theme(colors.indigo.600)',
            },
            textShadow: {
                'neon': '0 0 5px theme(colors.indigo.400), 0 0 20px theme(colors.indigo.600)',
            }
        },
    },
    plugins: [],
}