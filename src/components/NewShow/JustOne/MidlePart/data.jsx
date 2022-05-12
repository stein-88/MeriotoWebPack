const schemamidlepart = {
    novoloop: [
        {
            refer: 'description',
            schema: 'Description:',
        },
        {
            refer: 'condition',
            schema: 'Condition:',
        },
        {
            refer: 'address_city',
            schema: 'Address city:',
        },
        {
            refer: 'address_state',
            schema: 'Address state:',
        },
        {
            refer: 'address_postcode',
            schema: 'Postcode:',
        },
        {
            refer: 'address_country',
            schema: 'Country:',
        },
        {
            refer: 'category',
            schema: 'Category ID:',
            subRefer: 'id',
        },
        {
            refer: 'category',
            schema: 'Category name:',
            subRefer: 'category_name',
        },
        {
            refer: 'logistics',
            schema: 'Logistic:',
            forjson: true,
        },
        {
            refer: 'product_type',
            schema: 'Product type:',
        },
        {
            refer: 'weight',
            schema: 'Weight:',
        },
    ],
}

export default schemamidlepart
