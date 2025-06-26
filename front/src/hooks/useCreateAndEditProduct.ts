import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { API } from "../api";

import type { INewOrderForm } from "../api/resources/products/IProduct";

const useRequestedOrdersTab = () => {
  const [openCreateNewOrder, setOpenCreateNewOrder] = useState<boolean>(false);

  const {
    data: dataRequestOrdersTable,
    isFetching: isLoadingRequestOrdersTable,
    refetch,
  } = useQuery({
    queryKey: ["dataRequestOrdersTable"],
    refetchOnWindowFocus: false,
    queryFn: () => API.Products.getRequestOrdersData().response,
  });

  const {
    mutateAsync: createRequestOrder,
    isPending: isLoadingCreateRequestOrder,
  } = useMutation({
    mutationFn: (newOrder: INewOrderForm) =>
      API.Products.createRequestOrder(newOrder).response,
    onSuccess() {
      // successToast({
      //   description: translate({
      //     id: "repair.request.save.success",
      //   }),
      // });
      refetch();
    },
  });

  const handleCancelCreateNewOrder = () => {
    setOpenCreateNewOrder(false);
  };

  const confirmCreateNewOrder = async (data: INewOrderForm) => {
    try {
      await createRequestOrder(data);
    } catch (e) {
      console.log(e);
      // onError(e);
    }
  };

  return {
    isLoadingRequestOrdersTable,
    dataRequestOrdersTable,
    openCreateNewOrder,
    handleCancelCreateNewOrder,
    confirmCreateNewOrder,
    isLoadingCreateRequestOrder,
  };
};

export default useRequestedOrdersTab;
