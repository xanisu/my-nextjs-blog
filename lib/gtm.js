export const GTM_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID

export const GTMPageView = function (url) {
  var pageEvent = {
    event: 'pageview',
    page: url,
  }
  window && window.dataLayer && window.dataLayer.push(pageEvent)
  return pageEvent
}
