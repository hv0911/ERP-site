const Brand = require("../models/ProductModel/Brand"); 
const { findById } = require("../models/ProductModel/Category"); 
const Category = require("../models/ProductModel/Category"); 
const Model = require('../models/ProductModel/Model'); 
const Combo = require("../models/ProductModel/Combo");
const Service = require("../models/ProductModel/Service");
const SingleProduct = require("../models/ProductModel/SingleProduct");
const Unit = require("../models/ProductModel/Unit"); 
const Variant = require("../models/ProductModel/Variant"); 

//   <- CATEGORY APIS -->

exports.createCategory =  async(req, res) => {

    try {
        const { name, code, status, parent } = req.body;

        const category = new Category({

            name: name,
            code: code,
            status: status,
            parent: parent
        });
        category.save();

        return res.status(201).json({
            success: true,
            category: category,
            status:201,
            message:"task assigned"

        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error,
        })
    }
};

exports.categoryList = async (req, res) => {
    try {
        const categories = await Category.find({});

        if (!categories) {
            return res.status(404).json({
                success: false,
                message: "category not found"
            });
        }

        return res.status(201).json({
            success: true,
            categories: categories
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}


// for getting a particular category
exports.categoryUpdateGet = async (req, res) => {


    try {
        const category = await Category.findById(req.params.cateId);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "category not found"
            });
        }

        return res.status(201).json({
            success: true,
            category: category
        })

    } catch (error) {
        return res.status(500).json({
            success: true,
            error
        })
    }
}


exports.updateCategory = async (req, res, next) => {

    const { name, code, status, parent } = req.body;
    console.log(req.params.id);

    const category = new Category({

        name: name,
        code: code,
        status: status,
        parent: parent,
        _id: req.params.cateId,
    });

    await Category.findByIdAndUpdate(req.params.cateId, category);

    return res.status(201).json({
        success: true,
        category: category
    })

}


exports.deleteCategory = async (req, res) => {

    try {
        await Category.findByIdAndRemove(req.params.cateId);

        return res.status(201).json({
            success: true,
            message: "category deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


//    <-- BRAND API -->

exports.createBrand = (req, res) => {

    try {

        const { name, description, status } = req.body;

        const brand = new Brand({
            name: name,
            description: description,
            status: status,
        });

        brand.save();

        return res.status(201).json({
            success: true,
            brand: brand,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.brandList = async (req, res) => {
    try {

        const brandList = await Brand.find({});

        if (!brandList) {
            return res.status(404).json({
                success: false,
                message: "brands not found"
            });
        }

        return res.status(201).json({
            success: true,
            brandList: brandList
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.updateBrandget = async (req, res) => {

    try {

        const brand = await findById(req.params.id);

        if (!brand) {
            return res.status(404).json({
                success: false,
                message: "brand not found"
            })
        }

        return res.status(201).json({
            success: true,
            brand: brand
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}

exports.updateBrand = async (req, res) => {

    try {

        const { name, description, status } = req.body;

        const brand = new Brand({
            name: name,
            description: description,
            status: status,
            _id: req.params.id
        });

        await Brand.findByIdAndUpdate(req.params.id, brand);

        return res.status(201).json({
            success: true,
            brand: brand
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}


exports.deleteBrand = async (req, res) => {

    try {
        await Brand.findByIdAndDelete(req.params.id);

        return res.status(201).json({
            success: true,
            message: "brand deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}


//   <-- Model API -->


exports.createModel = (req, res) => {

    try {

        const { name, description, status } = req.body;

        const model = new Model({
            name: name,
            description: description,
            status: status,
        });

        model.save();

        return res.status(201).json({
            success: true,
            model: model,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.ModelList = async (req, res) => {
    try {

        const modelList = await Model.find({});

        if (!modelList) {
            return res.status(404).json({
                success: false,
                message: "models not found"
            });
        }

        return res.status(201).json({
            success: true,
            modelList: modelList
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.updateModelget = async (req, res) => {

    try {

        const model = await findById(req.params.id);

        if (!model) {
            return res.status(404).json({
                success: false,
                message: "model not found"
            })
        }

        return res.status(201).json({
            success: true,
            model: model
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}



exports.updateModel = async (req, res) => {

    try {

        const { name, description, status } = req.body;

        const model = new Model({
            name: name,
            description: description,
            status: status,
            _id: req.params.id
        });

        await Model.findByIdAndUpdate(req.params.id, model);

        return res.status(201).json({
            success: true,
            model: model
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}


exports.deleteBrand = async (req, res) => {

    try {
        await Model.findByIdAndDelete(req.params.id);

        return res.status(201).json({
            success: true,
            message: "model deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}



//   <-- Unit APIs -->

exports.createUnit = (req, res) => {

    try {

        const { name, description, status } = req.body;

        const unit = new Unit({
            name: name,
            description: description,
            status: status,
        });

        unit.save();

        return res.status(201).json({
            success: true,
            unit: unit,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.UnitList = async (req, res) => {
    try {

        const unitList = await Model.find({});

        if (!unitList) {
            return res.status(404).json({
                success: false,
                message: "units not found"
            });
        }

        return res.status(201).json({
            success: true,
            unitList: unitList
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.updateUnitget = async (req, res) => {

    try {

        const unit = await Unit.findById(req.params.id);

        if (!unit) {
            return res.status(404).json({
                success: false,
                message: "model not found"
            })
        }

        return res.status(201).json({
            success: true,
            unit: unit
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.updateUnit = async (req, res) => {

    try {

        const { name, description, status } = req.body;

        const unit = new Unit({
            name: name,
            description: description,
            status: status,
            _id: req.params.id
        });

        await Unit.findByIdAndUpdate(req.params.id, model);

        return res.status(201).json({
            success: true,
            unit: unit
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}


exports.deleteUnit = async (req, res) => {

    try {
        await Unit.findByIdAndDelete(req.params.id);

        return res.status(201).json({
            success: true,
            message: "unit deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}



//  <-- VARIANT APIs -->

exports.createVariant = (req, res) => {

    try {

        const { name, description, status } = req.body;

        const variant = new Variant({
            name: name,
            description: description,
            status: status,
        });

        variant.save();

        return res.status(201).json({
            success: true,
            variant: variant,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.VariantList = async (req, res) => {
    try {

        const variantList = await Variant.find({});

        if (!variantList) {
            return res.status(404).json({
                success: false,
                message: "variant not found"
            });
        }

        return res.status(201).json({
            success: true,
            variantList: variantList
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.updateVariantget = async (req, res) => {

    try {

        const variant = await Variant.findById(req.params.id);

        if (!variant) {
            return res.status(404).json({
                success: false,
                message: "model not found"
            })
        }

        return res.status(201).json({
            success: true,
            variant: variant
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}

exports.updateVariant = async (req, res) => {

    try {

        const { name, description, status } = req.body;

        const unit = new Variant({
            name: name,
            description: description,
            status: status,
            _id: req.params.id
        });

        await Variant.findByIdAndUpdate(req.params.id, model);

        return res.status(201).json({
            success: true,
            unit: unit
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}


exports.deleteVariant = async (req, res) => {

    try {
        await Variant.findByIdAndDelete(req.params.id);

        return res.status(201).json({
            success: true,
            message: "variant deleted"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

//  <-- PRODUCT CONTROLLERS -->







// fetching a partiular product
exports.singleProduct = async(req , res)=>{
 try {
    
    const product = await singleProduct.findById(req.params.Id);
    
    if(!product){
        return res.status(404).json({
            success:false,
            messsage:"product does not exists"
        })
    }

    return res.status(201).json({
        success:true,
        product:product,
    })

 } catch (error) {
    
    return res.status(500).json({
        success:false,
        error
    })

 }

}

exports.deleteSingleProduct = async( req , res)=>{

  try {

    await singleProduct.findByIdAndDelete(req.params.Id);

    return res.status(201).json({
        success:true,
        messsage:"product deleted"
    })

  } catch (error) {
    
    return res.status(500).json({
        success:false,
        error
    })

  }
  
}

// updating a product 

exports.updateSingelProduct = async(req  , res , next)=>{

    try {
        
        const product = new singleProduct({

            product_name:req.body.product_name,
        
            product_sku:req.body.product_sku,
        
            unit:req.body.unit,
        
            baracode_type:req.body.baracode_type,
        
            brand:req.body.brand,
        
            category:req.body.category,
        
            subCategory:req.body.subCategory,
        
            model:req.body.model,
        
            alter_qauntity:req.body.alter_qauntity,
        
            purchase_price:req.body.purchase_price,
        
            selling_price:req.body.selling_price,

            tax:req.body.tax,
        
            tax_type:req.body.tax_type,
        
            description:req.body.description,

            _id:req.params.Id

        });

        await singleProduct.findByIdAndUpdate(req.params.Id , product ,(err)=>{
            if(err){
                return next(err);
            }
        });

        return res.status(201).json({
            success:true,
            updateProduct:product
        });

        

    } catch (error) {
        
        return res.status(5000).json({
            success:false,
            error
        })
    }
}



//   <--  Service Controllers -->




// fetching a particular service
exports.Service = async(req ,res )=>{

try {
    
const service = await Service.findById(req.params.Id);

if(!service){
    return res.status(404).json({
        success:false,
        message:"service does not exists"
    })
}

return res.status(201).json({
    success:true,
    service:service
});

} catch (error) {
   
    return res.status(500).json({
        success:false,
        message:"true"
    })
}

}

// updating service

exports.updateService = async(req,res)=>{

  try {

    const {product_name , sku , hourly_rate , description } = req.body;

    const service = await Service({
        product_name:product_name,
        sku:sku,
        hourly_rate:hourly_rate,
        description:description,

    });

    await Service.findByIdAndUpdate(req.params.Id , service , (err)=>{
        if(err){
            next(err);
        }
    })

    return res.status(201).json({
        success:true,
        updatedService: service
    });
    
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:"true"
    })
  }

}


//       <--  ComboProduct -->  

exports.createCombo = async(req , res)=>{


    try {
        
        const combo = new Combo({

            product_name:req.body.product_name,

            barcode_type:req.body.barcode_type,

            select_product:req.body.select_product,

            purchase_price:req.body.purchase_price,

            min_selling_price:req.body.min_selling_price,

            combo_selling_price:req.body.combo_selling_price,

            description:req.body.description,

        });

        await combo.save();

        return res.status(201).json({
            success:true,
            combo:combo,
        });


    } catch (error) {
        
        return res.status(201).json({
            success:false,
            error
        })

    }

}


exports.ComboList = async(req , res )=>{
    
    try {
        
        const comboList = await Combo.find({});
        
        if(!comboList){
            return res.status(201).json({
                success:false,
               message:"no combo Products"
            })
        }

        return res.status(201).json({
            success:true,
            comboList : comboList,
        });



    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error
        })
    }

}

// fetching a specific combo product
exports.Combo = async(req,res)=>{
    try {
       const combo = await Combo.findById(req.params.Id).populate("product") ;
       
       if(!combo){
        return res.status(404).json({
            success:false,
            message:"comboProduct not found"
        })
       }

       return res.status(201).json({

        success:true,
         combo:combo,

       })

    } catch (error) {
        
        return res.status(201).json({
            success:false,
            error
        })

    }
}

// deleting a combo product
exports.deleteCombo = async(req , res)=>{

    try {
        
        await Combo.findByIdAndDelete(req.params.Id);

        return res.status(201).json({
            success:true,
            message:"product deleted"
        });


    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error
        })

    }

}


// edit remaining 





exports.updateCombo = (req,res)=>{
    res.send("NOT IMPLIMENTED");
}








//    Main Product  Controllers 

exports.createProductGet = ( req , res , next )=>{

    res.render("pages/product");

}

exports.createServiceGet = ( req , res , next  )=>{
    
    res.render("pages/service")

}


exports.createSingleProduct = async(req , res)=>{

    try {
       
        const product = new SingleProduct({

            product_name:req.body.product_name,
        
            product_sku:req.body.product_sku,
        
            unit:req.body.unit,
        
            // baracode_type:req.body.baracode_type,
        
            brand:req.body.brand,
        
            category:req.body.category,
        
            subCategory:req.body.subCategory,
        
            model:req.body.model,
        
            alter_qauntity:req.body.alter_qauntity,
        
            purchase_price:req.body.purchase_price,
        
            selling_price:req.body.selling_price,

            min_selling_price:req.body.min_selling_price,

            tax:req.body.tax,
        
            // tax_type:req.body.tax_type,
        
            description:req.body.description,
        
        
        });

       await product.save((err)=>{
        if(err){
          return next(err) ;
        }
       });

        return res.redirect("/products");


        
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error,
        })

    }

}



exports.createService = async(req , res )=>{
    try {
        
        const {product_name , sku , hourly_rate , description } = req.body;
    
        const service = await Service({
            product_name:product_name,
            sku:sku,
            hourly_rate:hourly_rate,
            description:description,
    
        });

        await service.save((err)=>{
            if(err){
                return next(err);
            }
        });
    
        return res.redirect("/services");
    
    } catch (error) {
        
        return res.status(500).json({
    
            success:false,
            error
        })
    
    }
    }

 // change 
    exports.ProductList = async(req , res )=>{

        try {
            
            const productList = await SingleProduct.find({});
    
            if(!productList){
              return res.status(404).render(
                "pages/products",{
                    productList:"",
                    success:false
                }
              )
            }
    
            return res.status(201).render(  
                "pages/products",
                {
                success:true,
                productList:productList
            });
    
    
        } catch (error) {
            
            return res.status(500).json({
                success:false,
                error
            })
    
        }
    
    }


 // change
    exports.ServiceList = async(req , res)=>{

        try {
            const serviceList = await Service.find({});
    
            if(!serviceList){
                return res.status(404).render(
                    "pages/services",{
                    success:false,
                    serviceList:""
                });
            }
    
            return res.status(201).render(
                "pages/services",
                {
                success:true,
                serviceList:serviceList
            });
    
        } catch (error) {
            
            return res.status(201).json({
                success:false,
                error
            })
    
        }
    }
    