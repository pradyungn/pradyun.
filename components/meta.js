import Head from 'next/head'

export default (props)=> (
  <Head>
    <title>{ props.siteTitle }</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={ "description" in props ? props.description : "Maker of things. Engineering afficionado. " }/>
    <meta property="og:description" content={ "description" in props ? props.description : "Maker of things. Engineering afficionado. " }/>
    <meta property="og:title" content={ props.siteTitle }/>
    <meta property="og:site_name" content={ props.siteTitle }/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content={`https://pradyun.tech/${"path" in props ? props.path : ""}`}/>
    <meta property="og:image" content={
      `https://pradyun.vercel.app/${"img" in props ? props.img : "me.webp"}`
    }/>
  </Head>
)
