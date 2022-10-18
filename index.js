const express = require('express');
const cors = require('cors');
const slugify = require('slugify');
const apicache = require("apicache");
const cache = apicache.middleware

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.listen(port, function() {
    console.log('listening on port ' + port);
});

app.get('/:name', cache('2 hour'), function(req, res) {
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
    if (crush == 'null') {
        const crushname = [{
            content: 'Greetings',
            slug: 'Greetings'
        }];
        res.json(crushname);
    } else {
        const crushname = [{
            content: seo_title.replace(/[-]/g, ' ', ) || 'Hello World',
            slug: seo_title || 'Hello World'
        }];
        res.json(crushname);
    }
});

app.use('/', function(req, res) {
    const crushname = [{
        content: 'Hello World',
        slug: 'Hello-World'
    }];
    res.json(crushname);
});

app.use((err, req, res, next) => {
    const crushname = [{
        content: 'Hello World',
        slug: 'Hello-World'
    }];
    if (!err) return next();
    return res.status(403).json(crushname);
});