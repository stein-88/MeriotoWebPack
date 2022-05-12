const schemafinalpart = {
    novoloop: [
        {
            refer: 'units',
            schema: 'Units:',
        },
        {
            refer: 'unit_qty',
            schema: 'Unit qty:',
        },
        {
            refer: 'qty',
            schema: 'qty:',
        },
        {
            refer: 'for_company',
            schema: 'For company:',
            yesORno: true,
        },
        {
            refer: 'for_charity',
            schema: 'For charity:',
            yesORno: true,
        },
        {
            refer: 'for_individual',
            schema: 'For individual:',
            yesORno: true,
        },
        {
            refer: 'for_internal',
            schema: 'For internal:',
            yesORno: true,
        },
        {
            refer: 'is_license_required',
            schema: 'License is required:',
            yesORno: true,
        },
        {
            refer: 'reason_for_listing',
            schema: 'Reason for listing:',
        },
        {
            refer: 'id',
            schema: 'ID:',
        },
        {
            refer: 'created',
            schema: 'Created:',
        },
        {
            refer: 'url',
            schema: 'API_URL',
            special: true,
        },
    ],
}

export default schemafinalpart
