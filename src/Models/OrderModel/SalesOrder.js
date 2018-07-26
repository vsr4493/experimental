export default (id, vendor_id, order_reference_id, customer_name, amount, discount, barcode, status,
    source, shipping_label_url, metadata, created_at, updated_at, deleted_at) => {
    return {
        id, vendor_id, order_reference_id, customer_name, amount, discount, barcode, status,
        source, shipping_label_url, metadata, created_at, updated_at, deleted_at
    };
}