const express = require('express')
const puppeteer = require('puppeteer')

const server = express()

server.get('/', async (request, response) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.alura.com.br/formacao-front-end')
  
    const pageContent = await page.evaluate(() => {
        const data = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            title: document.querySelector('.formacao-headline-titulo').innerHTML,
            subtitle: document.querySelector('.formacao-headline-subtitulo').innerHTML,
            workload: document.getElementsByClassName('formacao__info-destaque')[0].innerHTML,
            courses: document.getElementsByClassName('formacao__info-destaque')[1].innerHTML
        }

        return data
    })

    await browser.close();
    response.json(pageContent)
})


server.listen(3000, () => console.log('*** Server is running ***'))
