const slugify = require('slugify');

const seo_title = slugify('Hello Santhosh Veer', {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: false,
    strict: false
});
const crushname = [{
    content: seo_title.replace(/[-]/g, ' ', ) || 'Hello World',
    slug: seo_title || 'Hello World'
}];
console.log(crushname);