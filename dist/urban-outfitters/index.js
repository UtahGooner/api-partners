"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const csv_import_1 = require("./csv-import");
const orders_list_1 = require("./orders-list");
const router = (0, express_1.Router)({ mergeParams: true });
router.post('/test-upload', csv_import_1.testUpload);
router.post('/upload', csv_import_1.onUpload);
router.post('/orders/complete', orders_list_1.postCompleteOrders);
router.get('/orders/so/:SalesOrderNo([0-9A-Z]{7})', orders_list_1.getOrders);
router.get('/orders/:status', orders_list_1.getOrders);
router.get('/orders/:minDate?/:maxDate?', orders_list_1.getOrders);
router.get('/urban-outfitters-tracking.csv', orders_list_1.getInvoiceTracking);
exports.default = router;
