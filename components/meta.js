import Head from 'next/head'

export default (props)=> (
  <Head>
    <title>{ props.siteTitle }</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={ "description" in props ? props.description : "Maker of things. Engineering afficionado. " }/>
    <meta name="og:description" content={ "description" in props ? props.description : "Maker of things. Engineering afficionado. " }/>
    <meta name="og:title" content={ props.siteTitle }/>
    <meta name="og:image" content={
      `https://pradyun.vercel.app/${"img" in props ? props.img : "me.webp"}`
    }/>
  </Head>
)
