import { View, Pressable, Text } from 'react-native'
import { Uniwind, useUniwind } from 'uniwind'

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind()

  const themes = [
    { name: 'light', label: 'Light', icon: '☀️' },
    { name: 'dark', label: 'Dark', icon: '🌙' },
    { name: 'system', label: 'System', icon: '⚙️' },
  ]

  // Safe handling for when theme is null (common right after setting 'system')
  const activeTheme = hasAdaptiveThemes ? 'system' : (theme ?? 'light')

  // TODO Fix switch to system theme
  return (
    <View className="p-4 gap-4">
      <Text className="text-sm text-gray-600 dark:text-gray-300">
        Current: {activeTheme}
      </Text>

      <View className="flex-row gap-2">
        {themes.map((t) => {
          const isActive = activeTheme === t.name

          return (
            <Pressable
              key={t.name}
              onPress={() => Uniwind.setTheme(t.name)}
              className={`
                px-4 py-3 rounded-lg items-center flex-1
                ${isActive
                  ? 'bg-blue-500'
                  : 'bg-gray-200 dark:bg-gray-700'
                }
              `}
            >
              <Text className="text-2xl mb-1">{t.icon}</Text>
              <Text
                className={`text-xs font-medium ${isActive
                  ? 'text-white'
                  : 'text-gray-900 dark:text-white'
                  }`}
              >
                {t.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
