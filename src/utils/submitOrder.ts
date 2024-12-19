

export function submitOrder(orderFormStore: any, accessoriesStore: any, casesSelectsStore: any, terminalsSelectsStore: any, inputsSelectsStore: any, orientationStore: any): boolean {
    console.log(
        orderFormStore.orderFormData, '1',
        accessoriesStore.accessoriesValue, '2',
        casesSelectsStore.selectValues, '3',
        terminalsSelectsStore.selectValues, '4',
        inputsSelectsStore.selectsValues, '5',
        orientationStore.orientationValue, '6'
    )
    return true
}
