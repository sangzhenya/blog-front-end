let config = {}

if (process.env.NODE_ENV === 'development') {
  config.webDomain = 'http://localhost:8081/'
  config.adminURL = 'http://localhost:8081/'
} else {
  config.webDomain = 'https://web.programya.com/'
  config.adminURL = 'https://web.programya.com/'
}

export default config
