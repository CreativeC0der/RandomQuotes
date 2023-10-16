const { get } = require('mongoose');
const { getJson } = require('serpapi')

async function get_image(author) {
    const serpapi_obj = await getJson(
        {
            engine: 'google_images',
            api_key: '17075d351eaf931971b5b2bcfa3dbb778a754e1476baea77aaba6187636b2c4e',
            q: author + ' portrait'
        })
    console.log(serpapi_obj['search_parameters']);
    const image = serpapi_obj['images_results'].find((ele) => ele.original_width == ele.original_height)
    console.log(image);
    return image.thumbnail;
}

module.exports = { get_image };

