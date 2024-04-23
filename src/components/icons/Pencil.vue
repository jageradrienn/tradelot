<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4484_5512)">
      <path
        d="M17.5475 2.45241C17.2952 2.20117 16.9956 2.0024 16.666 1.8676C16.3364 1.73281 15.9834 1.66464 15.6273 1.66705C15.2713 1.66946 14.9192 1.7424 14.5915 1.88165C14.2638 2.0209 13.9669 2.2237 13.718 2.47834L2.97757 13.2187L1.6665 18.3334L6.78116 17.0216L17.5216 6.28118C17.7763 6.0324 17.9791 5.7356 18.1184 5.40793C18.2577 5.08027 18.3307 4.72824 18.3331 4.37221C18.3355 4.01617 18.2673 3.66319 18.1325 3.33367C17.9976 3.00414 17.7988 2.70462 17.5475 2.45241V2.45241Z"
        :stroke="stroke"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.4111 2.78564L17.214 6.58849"
        :stroke="stroke"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.97852 13.2178L6.78507 17.0177"
        :stroke="stroke"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4484_5512">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    stroke: {
      type: String,
      default: "#4F1FFF",
    },
  },
};
</script>
