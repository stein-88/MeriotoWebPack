const schemalooppart = {
    delet: 'Delete Image',
    upimg: 'Update Image',
    inp: [
        {
            type: 'text',
            place: 'Product Name',
            refer: 'theproduct',
        },
        {
            type: 'number',
            place: 'Product Price',
            refer: 'theprice',
        },
        {
            type: 'number',
            place: 'Product Amount',
            refer: 'theamount',
        },
    ],
    fileinp: {
        type: 'file',
        place: 'Set the image',
        accept: 'image/*',
        refer: 'fileimg',
    },
}

export default schemalooppart
