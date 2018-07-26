export default (id, name, discount_type, vendor_type, vendor_id, discount_units,
    min_amount, min_amount_type, status, created_at, deleted_at, updated_at) => {
    return {
        id, name, discount_type, vendor_type, vendor_id, discount_units,
        min_amount, min_amount_type, status, created_at, deleted_at, updated_at
    }
}