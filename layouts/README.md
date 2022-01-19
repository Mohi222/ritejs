## Layouts
React components in this directory are used as layouts.

By default, DefaultLayout.tsx is used unless getLayout property exists in page.

```javascript
export default function Page() {
  return {
    /** Your content */
  }
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}`
