const express = require('express')
const puppeteer = require('puppeteer')

const server = express()

server.get('/', (request, response) => {
    response.send('Hello World!')
})


server.listen(3000, () => console.log('*** Server is running ***'))

async function start () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.alura.com.br/formacao-front-end')



  await browser.close();
}