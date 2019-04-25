module.exports = `
  <!DOCTYPE html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Koa Server HTML</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Hi <%= me %></h1>
            <p>This is <%= you %></p>
          </div>
          <div class="col-md-4">
            <p>测试静态 HTML 页面</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`