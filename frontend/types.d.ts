interface ISupermarketSales {
    data: {
        total_sales_per_branch: total_sales_per_branch,
        sales_by_gender: sales_by_gender,
        gross_income_data: gross_income_data,
        product_line_by_total_sales: product_line_by_total_sales,
        product_line_by_gross_income: product_line_by_gross_income,
        product_line_by_rating: product_line_by_rating,
        payment_methods: payment_methods,
        product_line_by_quantity: product_line_by_quantity,
        shopping_hour_data: shopping_hour_data
    }
}

interface total_sales_per_branch {
    labels: string[]
    data: number[]
    label: string
}

interface sales_by_gender {
    labels: string[]
    data: number[]
    label: string
}

interface gross_income_data {
    labels: string[]
    data: number[]
    label: string
}

interface product_line_by_total_sales {
    labels: string[]
    data: number[]
    label: string
}

interface product_line_by_gross_income {
    labels: string[]
    data: number[]
    label: string
}

interface product_line_by_rating {
    labels: string[]
    data: number[]
    label: string
}

interface payment_methods {
    labels: string[]
    data: number[]
    label: string
}

interface product_line_by_quantity {
    labels: string[]
    data: number[]
    label: string
}

interface shopping_hour_data {
    labels: string[]
    label: string
    A: A
    B: B
    C: C
}

interface A {
    label: string
    data: number[]
}

interface B {
    label: string
    data: number[]
}

interface C {
    label: string
    data: number[]
}