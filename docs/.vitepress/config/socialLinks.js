// 右上角导航中显示带有图标的社交帐户链接
const socialLinks = [
  // { icon: 'discord', link: 'https://github.com/' },
  // { icon: 'facebook', link: 'https://github.com/' },
  // { icon: 'instagram', link: 'https://github.com/' },
  // { icon: 'linkedin', link: 'https://github.com/' },
  // { icon: 'slack', link: 'https://github.com/' },
  // { icon: 'twitter', link: 'https://github.com/' },
  // { icon: 'youtube', link: 'https://github.com/' },
  { icon: 'github', link: 'https://github.com/muyaCode/WZNotes' },
  {
    icon: {
      svg: `<svg t="1660806015529" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1999" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
        <defs>
          <style type="text/css">
            @font-face { font-family: feedback-iconfont; src: url("//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944") format("woff2"), url("//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944") format("woff"), url("//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944") format("truetype"); }
          </style>
        </defs>
        <path d="M514.6112 508.672m-445.4912 0a445.4912 445.4912 0 1 0 890.9824 0 445.4912 445.4912 0 1 0-890.9824 0Z" fill="#FFF3E6" p-id="2000"></path>
        <path d="M672.256 358.912c23.3984-13.9776 39.168-39.936 39.168-69.7344 0-44.5952-35.2768-80.7424-78.7456-80.7424-19.5072 0-37.2736 7.3216-51.0464 19.3024-13.6704-23.8592-38.912-39.8848-67.84-39.8848s-54.1696 16.0256-67.84 39.8848c-13.7728-12.032-31.5392-19.3024-51.0464-19.3024-43.52 0-78.7456 36.1472-78.7456 80.7424 0 29.7984 15.7696 55.7056 39.168 69.7344-80.4864 45.2096-133.8368 123.8016-133.8368 213.2992 0 140.2368 130.8672 253.9008 292.3008 253.9008s292.352-113.664 292.352-253.9008c-0.0512-89.4464-53.4016-168.0384-133.888-213.2992z m-73.984 208.0256c14.1312 0 25.6 11.776 25.6 26.2656s-11.4688 26.2656-25.6 26.2656h-60.928v62.464c0 14.4896-11.4688 26.2656-25.6 26.2656s-25.6-11.776-25.6-26.2656v-62.464h-60.928c-14.1312 0-25.6-11.776-25.6-26.2656s11.4688-26.2656 25.6-26.2656h60.928v-20.0192h-60.928c-14.1312 0-25.6-11.776-25.6-26.2656s11.4688-26.2656 25.6-26.2656h27.904c-17.2032-18.9952-32.256-35.5328-35.7888-39.2192a26.63424 26.63424 0 0 1-7.2704-27.9552c4.4544-13.7728 18.9952-21.1968 32.4096-16.5888 6.8608 2.3552 6.8608 2.3552 49.7664 49.7152 6.9632 7.68 13.9264 15.36 19.968 22.0672l61.3888-65.1264a25.12896 25.12896 0 0 1 36.1984-0.6144c10.1888 10.0864 10.4448 26.6752 0.6144 37.12l-38.2976 40.6016h26.1632c14.1312 0 25.6 11.776 25.6 26.2656s-11.4688 26.2656-25.6 26.2656h-60.928v20.0192h60.928z" fill="#FFA131" p-id="2001"></path><path d="M768.9728 448.3584c-23.3984-36.1984-56.6784-66.9696-96.7168-89.4464 23.3984-13.9776 39.168-39.936 39.168-69.7344 0-44.5952-35.2768-80.7424-78.7456-80.7424-19.5072 0-37.2736 7.3216-51.0464 19.3024-13.6704-23.8592-38.912-39.8848-67.84-39.8848s-54.1696 16.0256-67.84 39.8848c-13.7728-12.032-31.5392-19.3024-51.0464-19.3024-43.52 0-78.7456 36.1472-78.7456 80.7424 0 29.7984 15.7696 55.7056 39.168 69.7344-80.4864 45.2096-133.8368 123.8016-133.8368 213.2992 0 50.432 16.9984 97.3824 46.1824 136.9088 17.3056 6.2464 35.2256 11.3664 53.8112 15.104 199.7824 40.8064 394.9568-81.664 447.488-275.8656z m-170.7008 118.5792c14.1312 0 25.6 11.776 25.6 26.2656s-11.4688 26.2656-25.6 26.2656h-60.928v62.464c0 14.4896-11.4688 26.2656-25.6 26.2656s-25.6-11.776-25.6-26.2656v-62.464h-60.928c-14.1312 0-25.6-11.776-25.6-26.2656s11.4688-26.2656 25.6-26.2656h60.928v-20.0192h-60.928c-14.1312 0-25.6-11.776-25.6-26.2656s11.4688-26.2656 25.6-26.2656h27.904c-17.2032-18.9952-32.256-35.5328-35.7888-39.2192a26.63424 26.63424 0 0 1-7.2704-27.9552c4.4544-13.7728 18.9952-21.1968 32.4096-16.5888 6.8608 2.3552 6.8608 2.3552 49.7664 49.7152 6.9632 7.68 13.9264 15.36 19.968 22.0672l61.3888-65.1264a25.12896 25.12896 0 0 1 36.1984-0.6144c10.1888 10.0864 10.4448 26.6752 0.6144 37.12l-38.2976 40.6016h26.1632c14.1312 0 25.6 11.776 25.6 26.2656s-11.4688 26.2656-25.6 26.2656h-60.928v20.0192h60.928z" fill="#FFAD3A" p-id="2002"></path><path d="M672.256 358.912c1.792-1.0752 3.5328-2.2528 5.2224-3.4816 13.312-26.112 24.1664-53.8624 32.2048-83.0976-7.5264-36.5056-39.168-63.9488-77.0048-63.9488-19.5072 0-37.2736 7.3216-51.0464 19.3024-13.6704-23.8592-38.912-39.8848-67.84-39.8848s-54.1696 16.0256-67.84 39.8848c-13.7728-12.032-31.5392-19.3024-51.0464-19.3024-43.52 0-78.7456 36.1472-78.7456 80.7424 0 29.7984 15.7696 55.7056 39.168 69.7344-80.4864 45.2096-133.8368 123.8016-133.8368 213.2992 0 6.2464 0.3584 12.4928 0.8704 18.6368 62.3104 9.0624 123.8528 4.5568 181.2992-11.52 4.5056-7.424 12.4928-12.3904 21.6576-12.3904h15.9744c15.36-5.8368 30.3616-12.544 44.9536-20.0192v-0.0512h-60.928c-14.1312 0-25.6-11.776-25.6-26.2656s11.4688-26.2656 25.6-26.2656h27.904c-17.2032-18.9952-32.256-35.5328-35.7888-39.2192a26.63424 26.63424 0 0 1-7.2704-27.9552c4.4544-13.7728 18.9952-21.1968 32.4096-16.5888 6.8608 2.3552 6.8608 2.3552 49.7664 49.7152 6.9632 7.68 13.9264 15.36 19.968 22.0672l61.3888-65.1264a25.12896 25.12896 0 0 1 36.1984-0.6144c8.2944 8.192 9.8816 20.6848 4.9152 30.72 23.2448-26.1632 43.52-55.296 60.16-86.8864-0.9728-0.4096-1.8432-0.9728-2.7136-1.4848z" fill="#FFBB48" p-id="2003"></path><path d="M256.256 452.0448c145.7152-15.6672 275.2-104.3968 342.1696-235.52-6.0928 3.0208-11.7248 6.8096-16.7936 11.264-13.6704-23.8592-38.912-39.8848-67.84-39.8848s-54.1696 16.0256-67.84 39.8848c-13.7728-12.032-31.5392-19.3024-51.0464-19.3024-43.52 0-78.7456 36.1472-78.7456 80.7424 0 29.7984 15.7696 55.7056 39.168 69.7344-41.4208 23.1936-75.5712 55.296-99.072 93.0816z" fill="#FFC753" p-id="2004"></path>
      </svg>`
    },
    link: 'https://muyacode.github.io/WZNotes'
  }
]

export default socialLinks;