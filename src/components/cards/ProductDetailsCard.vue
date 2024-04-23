<template>
    <div
        class=" pt-2 sm:pt-5 w-full grid grid-cols-1 md:grid-cols-[calc(25%-32px),calc(25%-32px),calc(50%-32px)] grid-rows-4 gap-5 sm:gap-8">
        <div class="col-span-1 sm:col-span-3">
            <Inputs label="Product Name" fontlabel="font-bold" for="pname" id="pname" name="pname"
                placeholder="Product Name" :value="productData && productData.name" />
        </div>
        <div class="col-span-1 sm:col-span-2">
            <Inputs label="EAN" fontlabel="font-bold" for="ean" id="ean" name="ean" placeholder="EAN Number"
                :value="productData && productData.EAN" />
        </div>
        <Inputs label="SKU" fontlabel="font-bold" for="sku" id="sku" name="sku" placeholder="SKU Number"
            :value="productData && productData.SKU" />
        <div class="col-span-1 sm:col-span-2">
            <label for="region" class="font-bold block text-sm mb-1.5">Region</label>
            <ListBox :menuData="region" title="Choose Region"
                :selected="productData && productData.region && productData.region !== 'N/A' ? productData.region
                    : productData && productData.region && productData.region === 'N/A' ? 'N/A' : region[0].menuElement" />
        </div>
        <div>
            <Inputs label="Stock" fontlabel="font-bold" for="Stock" id="Stock" name="Stock"
                placeholder="Number of Product" :value="productData && productData.stock"
                :borderColor="color === 'red' ? 'red' : ''" />
            <small v-if="color === 'red'" class="text-red text-sm">Not identified!</small>
        </div>
        <div>
            <Inputs label="Price" fontlabel="font-bold" for="Price" id="Price" name="Price" placeholder="Value Number"
                :value="productData && productData.price" :borderColor="color === 'red' ? 'red' : ''" />
            <small v-if="color === 'red'" class="text-red text-sm">Not identified!</small>
        </div>
        <div class="sm:-ml-3">
            <label for="Curreny" class="font-bold text-sm block mb-1.5">Currency</label>
            <ListBox :menuData="currency" title="€"
                :selected="productData && productData.price && productData.price !== 'N/A' ? productData.price[0]
                    : productData && productData.price && productData.price === 'N/A' ? 'N/A' : currency[0].menuElement" />
        </div>
        <Inputs label="Color" fontlabel="font-bold" for="Color" id="Color" name="Color" placeholder="Product Color"
            :active="productData && productData.color" />
    </div>
</template>

<script>
import Inputs from '/src/components/Inputs.vue/';
import Dropdown from '/src/components/Dropdown.vue';
import ListBox from '/src/components/ListBox.vue';

export default {
    props: {
        productData: {
            type: Object,
            required: true,
        },
        color: String,
    },
    components: {
        Inputs,
        Dropdown,
        ListBox,
    },

    data() {
        return {
            region: [
                {
                    id: 0,
                    menuElement: "Choose Region",
                },
                {
                    id: 1,
                    menuElement: "EU",
                },
                {
                    id: 2,
                    menuElement: "Asia",
                },
                {
                    id: 3,
                    menuElement: "UK",
                },
                {
                    id: 4,
                    menuElement: "USA",
                },
                {
                    id: 5,
                    menuElement: "Nordic",
                },
                {
                    id: 6,
                    menuElement: "RU",
                },
                {
                    id: 7,
                    menuElement: "Arabic",
                },
                {
                    id: 8,
                    menuElement: "JP",
                },
                {
                    id: 9,
                    menuElement: "N/A",
                },
            ],
            currency: [
                {
                    id: 0,
                    menuElement: "€",
                },
                {
                    id: 1,
                    menuElement: "€",
                },
                {
                    id: 2,
                    menuElement: "£",
                },
                {
                    id: 3,
                    menuElement: "$",
                },
                {
                    id: 4,
                    menuElement: "N/A",
                },
            ],
        }
    }
}
</script>

<style scoped></style>
