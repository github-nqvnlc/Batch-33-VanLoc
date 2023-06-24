$("#lang-vi").on("click", function () {
  $("#lang-choose").html(`${$("#lang-vi").html()}<span class="ml-2"
                ><i class="fa-solid fa-chevron-down text-xs"></i></span
            >`);
});

$("#lang-en").on("click", function () {
  $("#lang-choose").html(`${$("#lang-en").html()}<span class="ml-2"
                ><i class="fa-solid fa-chevron-down text-xs"></i></span
            >`);
});

$("#usd").on("click", function () {
  $("#money-choose").html(`${$("#usd").html()}<span class="ml-2"
  ><i class="fa-solid fa-chevron-down text-xs"></i></span
></a>`);
});
$("#eur").on("click", function () {
  $("#money-choose").html(`${$("#eur").html()}<span class="ml-2"
  ><i class="fa-solid fa-chevron-down text-xs"></i></span
></a>`);
});
$("#vnd").on("click", function () {
  $("#money-choose").html(`${$("#vnd").html()}<span class="ml-2"
  ><i class="fa-solid fa-chevron-down text-xs"></i></span
></a>`);
});

$(window).on("scroll", function () {
  var scrollPosition = $(this).scrollTop();
  if (scrollPosition > 100) {
    $("#navbar").addClass(
      "fixed top-0 w-screen animate__animated  animate__fadeInDown"
    );
    $("#logo").attr("src", "./assets/logo.png");
  } else {
    $("#navbar").removeClass(
      "fixed top-0 w-screen animate__animated  animate__fadeInDown"
    );
    $("#logo").attr("src", "./assets/logo.webp");
  }
});

$("#btn-re").on("click", function () {
  $(this).focus();
});

const dataProduct = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 27.87,
    preImg: "./assets/products/ao-thun-nam-1.jpg",
    backImg: "./assets/products/ao-thun-nam-2.jpg",
    option: [
      {
        color: "Đen",
        img: "./assets/products/ao-thun-nam-1.jpg",
      },
      {
        color: "Trắng",
        img: "./assets/products/ao-thun-nam-2.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Áo thun nữ",
    price: 27.87,
    preImg: "./assets/products/ao-thun-nu-1.jpg",
    backImg: "./assets/products/ao-thun-nu-2.jpg",
    option: [
      {
        color: "Đen",
        img: "./assets/products/ao-thun-nu-1.jpg",
      },
      { color: "Trắng", img: "./assets/products/ao-thun-nu-2.jpg" },
    ],
  },
];

const handleLoadProduct = (data) => {

  let html = "";
  data.forEach((item) => {
    html += `
    <div class="col-span-1 flex flex-col items-center justify-center">
    <div class="relative">
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="w-1/2 h-1/2 bg-black bg-opacity-50 flex justify-center items-center">
          <div class="w-1/2 h-1/2 bg-white"></div>
        </div>
      </div>
      <div class="relative">
        <img
          src="${item.preImg}"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="mt-4">
      <p class="text-sm font-semibold">${item.name}</p>
      <p class="text-sm font-semibold">$${item.price}</p>
    </div>
  </div>
    `;
  });
  $("#product").html(html);
};
