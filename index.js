const express = require('express');
const cors = require('cors');
const slugify = require('slugify');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.listen(port, function() {
    console.log('listening on port ' + port);
});

app.get('/:name', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    const crush = req.params.name;
    const seo_title = slugify(crush, {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false
    });
    const crushname = [{
        content: seo_title.replace(/[-]/g, ' ', ) || 'Hello World',
        slug: seo_title || 'Hello World'
    }];
    res.json(crushname);
});

app.use('/', function(req, res) {
    const crushname = [{
        content: 'Hello World',
        slug: 'Hello-World'
    }];
    res.json(crushname);
});