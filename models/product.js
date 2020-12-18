const mongoose=require('mongoose');
const schema=mongoose.Schema;

const productSchema=new schema({
productname:{
    type:String
},
productprice:{
    type:Number
},
productcategory:{
    type:schema.Types.ObjectId,
    ref:'category'
}

});

module.exports=mongoose.model('product',productSchema);