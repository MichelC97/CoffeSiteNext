import React from "react";
import { PaginationProps } from "./interfaces";
import { PageButton, PaginationWrapper } from "./components.styles";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <PageButton
        key={i}
        onClick={() => setCurrentPage(i)}
        disabled={i === currentPage}
      >
        {" "}
        {i}
      </PageButton>
    );
  }
  return <PaginationWrapper>{pages}</PaginationWrapper>;
}
