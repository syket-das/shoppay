/** @type {import('next').NextConfig} */

// import path from 'path'
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./base.scss";`
  }
}

module.exports = nextConfig
