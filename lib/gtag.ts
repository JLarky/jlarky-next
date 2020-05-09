export const GA_TRACKING_ID = 'UA-5041583-11'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}
