import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/context";
import ErrorModal from "../../ui/ErrorModal";
import AddingModal from "../../ui/AddingModal";
import classes from "./ProductItem.module.css";
import NoImage from "../../images/No-Picture.png";

const ProductItem = ({ products }) => {
  console.log(products);

  const ctx = useContext(Context);

  const [isActive, setIsActive] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [error, setError] = useState(false);
  const [addingModal, setAddingModal] = useState(false);
  console.log(ctx.productsInCart);
  console.log(ctx.allProducts);
  const params = useParams();

  const productItemData = products.find((item) => item.id === params.itemId);
  console.log(productItemData);
  const { brand, type, price, id } = productItemData;
  // console.log(ctx.productsInCart);
  // const itemIsInCart = ctx.productIsInCart(id);

  // const chosenSizeIsInCart = ctx.productsInCart.map((product) =>
  //   product.chosenSizes.some((size) => size.size === chosenSize)
  // );

  // const filteredProduct = ctx.productsInCart.filter(
  //   (product) => product.id === id
  // );

  const oneIten = {
    item1: "r",
    id: "n1",
    chosenSizes: [{ pcs: 1, size: "M" }],
  };

  const DMDT = [
    {
      item1: "r",
      id: "n1",
      chosenSizes: [
        { pcs: 1, size: "XS" },
        { pcs: 1, size: "M" },
        { pcs: 1, size: "L" },
      ],
    },
    {
      item1: "rrr",
      id: "n2",
      chosenSizes: [
        { pcs: 1, size: "XS" },
        { pcs: 1, size: "M" },
        { pcs: 1, size: "L" },
      ],
    },
    {
      item1: "rrwr",
      id: "n4",
      chosenSizes: [
        { pcs: 1, size: "XS" },
        { pcs: 1, size: "L" },
      ],
    },
  ];

  // console.log(upd);
  // console.log(DMDT, oneIten);
  // console.log(o, chosenSize);

  const activeSizeHandler = (id, size) => {
    setChosenSize(size);
    setIsActive(id);
  };

  const addToCartHandler = () => {
    if (chosenSize === null) {
      // alert("pls chose some size!");
      setError(true);
      return;
    }

    // if (!ctx.productsInCart.length) {
    //   console.log("there are no items in cart");
    //   const productInCart = {
    //     chosenSizes: [{ pcs: 1, size: chosenSize }],
    //     ...productItemData,
    //   };
    //   ctx.addToCart(productInCart);
    // }
    setAddingModal((prev) => {
      return (prev = true);
    });

    setTimeout(() => {
      setAddingModal(null);
    }, 1500);

    const updArray = [...ctx.productsInCart];
    const fltr = updArray.filter(
      (product) => product.id === productItemData.id
    );

    // arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
    // return fltr[0].chosenSizes.push({ pcs: 1, size: chosenSize });
    console.log(fltr[0]);
    if (fltr[0]) {
      fltr[0].chosenSizes.map((size) => {
        if (size.size === chosenSize) {
          const uj = {
            pcs: size.pcs + 1,
            size: size.size,
          };
          return (fltr[0].chosenSizes = [uj]);
        }
        const uj = {
          pcs: 1,
          size: chosenSize,
        };
      });

      return fltr[0];
    }
    console.log(fltr[0]);
    // const u = fltr.map((product) => {
    //   if (
    //     product.chosenSizes.map((size) => {
    //       if (size.size === chosenSize) {
    //         return console.log("includes");
    //       } else {
    //         const upf = [];
    //         upf.push(size);
    //         upf.push({ pcs: 1, size: chosenSize });
    //         return upf;
    //       }
    //     })
    //   )
    //     return console.log(product);
    // });
    // console.log(u);

    const updProd = {
      chosenSizes: [{ pcs: 1, size: chosenSize }],
      ...productItemData,
    };

    ctx.addToCart(updProd, chosenSize);
  };

  const closeErrorModalHandler = () => {
    setError(false);
  };

  console.log();
  if (productItemData.smallImage === undefined || null) {
    productItemData.smallImage = [NoImage, NoImage, NoImage];
  }

  return (
    <div>
      {error ? (
        <ErrorModal onClose={closeErrorModalHandler}>
          Please choose size of product!
        </ErrorModal>
      ) : (
        ""
      )}
      <div className={classes["product-item"]}>
        <div className={classes["content-container"]}>
          <div className={classes["main__image__container"]}>
            <div className={classes["product-image-container"]}>
              {productItemData.smallImage.map((img, ind) => (
                <img key={ind} id={ind} src={img} alt={productItemData.type} />
              ))}
            </div>
            <div className={classes["image-container"]}>
              <img src={productItemData.image} alt={productItemData.type} />
            </div>
          </div>

          <div className={classes["product-content-container"]}>
            <div className={classes["product-content-container-header"]}>
              <h2>{brand}</h2>
              <h1>{type}</h1>
              <p>Size:</p>
            </div>

            <ul className={classes["product-content-container-sizes"]}>
              {!productItemData.sizes ? (
                <p>There are no sizes availeble</p>
              ) : (
                productItemData.sizes.map((item) => (
                  <li
                    className={`${classes.size} ${
                      isActive === item.id ? classes["size__active"] : " "
                    }`}
                    onClick={() => activeSizeHandler(item.id, item.size)}
                    key={item.id}
                    id={item.id}
                  >
                    {item.size}
                  </li>
                ))
              )}
            </ul>

            <div className={classes["product-content-container-description"]}>
              <h1>Price:</h1>
              <span>
                {ctx.currency}
                {(price * ctx.course).toFixed(2)}
              </span>
              <AddingModal isActive={addingModal}>
                {productItemData.type}
              </AddingModal>
              <button onClick={() => addToCartHandler()}>
                <nobr>ADD TO CART</nobr>
              </button>
              <p>{productItemData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
