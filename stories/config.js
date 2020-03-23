const {
  STORYBOOK_SCRIPT_URL,
  STORYBOOK_API_HOST,
  STORYBOOK_APP_ID,
  STORYBOOK_APP_ID_ADD
} = process.env

export default {
  script_url: STORYBOOK_SCRIPT_URL || undefined,
  api_host: STORYBOOK_API_HOST || undefined,
  app_id: STORYBOOK_APP_ID || 'xPWXeLTvXo-1A-_D8YmbAQbE6dt-y78x',
  app_id_additional:
    STORYBOOK_APP_ID_ADD ||
    STORYBOOK_APP_ID ||
    'IYhDgMEtR0JpFDmYlLEU3gKcU4UklSu-'
}
