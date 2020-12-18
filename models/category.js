const mongoose = require('mongoose');
const schema = mongoose.Schema;

const subcategorySchema = new schema({
    subcatname: {
        type: String
    }
});

const categorySchema = new schema({
    categoryname: {
        type: String
    },
    subcatname: [subcategorySchema]

});

module.exports=mongoose.model('category',categorySchema);