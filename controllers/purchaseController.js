const Contact = require("../models/ContactModels/Contact");
const SingleProduct = require("../models/ProductModel/SingleProduct");
const { diffIndexes } = require("../models/PurchaseModels/Purchase");
const Purchase = require("../models/PurchaseModels/Purchase");
const PurchaseReturn = require("../models/PurchaseModels/PurchaseReturn");
const { ProductList } = require("./productController");

exports.createPurchase = async (req, res) => {


    try {
        const purchase = new Purchase({

            supplier: req.body.supplier,

            location: req.body.location,

            shipping_address: req.body.shipping_address,

            referenceNo: req.body.referenceNo,

            lc_no: req.body.lc_no,

            candf_agent: req.body.candf_agent,

            discount: req.body.discount,

            discount_type: req.body.discount_type,

            payment_method: req.body.payment_method,

            bank_name: req.body.bank_name,

            branch: req.body.branch,

            account_number: req.body.account_number,

            account_owner: req.body.account_owner,
        });

        await purchase.save((err) => {
            return next(err);
        })

        return res.status(201).json({
            success: true,
            product: product,
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            error,
        })

    }
}

exports.PurchaseList = async (req, res) => {

    try {

        const productList = await Purchase.find({});

        if (!productList) {

            return res.status(404).json({
                success: false,
                message: "no purchase found"
            })
        }

        return res.status(201).json({
            success: true,
            productList: productList
        })
    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }
}

exports.purchaseDetail = async (req, res, next) => {

    try {

        const purchase = await Purchase(req.params.Id)
            .populate("supplier")
            .popolate("candF_agent")
            .popolate("product")
            .exec((err) => {
                if (err) {
                    return next(err);
                }
            });

        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: "purchase not found"
            })
        }

        return res.status(201).json({
            success: true,
            purchase: purchase
        })

    } catch (error) {

        return res.status(201).json({
            success: false,
            error
        })

    }
}





//  <-- API for purchase return list -->

exports.createPurchaseReturn = async (req, res) => {

    try {

        const purchase = new PurchaseReturn({

            supplier: req.body.supplier,

            total_quantity: req.body.total_quantity,

            return_quantity: req.body.return_quantity,

            total_amount: req.body.total_amount,

            Product: req.body.Product,

            shipping_address: req.body.shipping_address,

            date: req.body.date,

            candF_agent: req.body.candF_agent,

        });

        purchase.save((err) => {
            if (err) {
                return next(err);
            }
        })

        return res.status(201).json({
            success: true,
            purchase: purchase
        });


    } catch (error) {

        return res.status(201).json({
            success: false,
            error,
        })

    }

}



exports.purchaseReturnList = async (req, res) => {

    try {

        const purchaseReturnList = await PurchaseReturn.find({});

        if (!purchaseReturnList) {
            return res.status(201).json({
                success: false,
                message: "no purchaseReturn found"
            })
        }

        return res.status(201).json({

            success: true,
            purchaseReturnList: purchaseReturnList,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}


exports.purchaseReturnDetail = async (req, res) => {
    try {
        //  product candF_agent
        const purchaseReturn = await PurchaseReturn.findById(req.params.Id)
            .populate("supplier")
            .populate("product")
            .popolate("CandF")
            .exec((err) => {
                if (err) {
                    return next(err);
                }
            });

        return res.status(201).json({
            success: true,
            purchaseReturn: purchaseReturn
        })


    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        });
    }

}


// Contorllers for Stock Alert List 




//  new Purchase

exports.createPurchaseGet = async (req, res) => {

    try {

        const supplier = await Contact.find({});

        const product = await SingleProduct.find({});

        return res.render("pages/purchase", {
            supplier: supplier,
            product: product
        });

    } catch (error) {

        return res.status(500).send({
             error
        })

    }



}