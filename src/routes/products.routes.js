import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";

router.post("/", productsCtrl.createProducts);

router.get("/", productsCtrl.getProducts);

router.get("/:productid", productsCtrl.getProductsById);

router.put("/:productid", productsCtrl.updateProductsById);

router.delete("/:productid", productsCtrl.delateProductsById);

export default router;
