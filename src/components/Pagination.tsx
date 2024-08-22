import { Button, Box } from "@mui/material";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  const renderPageButtons = () => {
    const pageNumbers = [];
    const visiblePages = 3; // Número total de botões de página a serem exibidos

    let startPage = Math.max(2, page - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages - 1, page + Math.floor(visiblePages / 2));

    // Ajuste se há menos páginas do que o número total de botões visíveis
    if (endPage - startPage + 1 < visiblePages - 1) {
      startPage = Math.max(2, endPage - (visiblePages - 1));
      endPage = Math.min(totalPages - 1, startPage + (visiblePages - 1));
    }

    // Adiciona o botão da primeira página se não estiver visível
    if (startPage > 2) {
      pageNumbers.push(
        <Button
          key={1}
          variant={page === 1 ? "contained" : "text"}
          onClick={() => onPageChange(1)}
          sx={{
            color: page === 1 ? "white" : "#003366",
            backgroundColor: page === 1 ? "#003366" : "transparent",
            "&:hover": {
              backgroundColor: page === 1 ? "#002f6c" : "transparent",
            },
            margin: "0 2px",
          }}
        >
          1
        </Button>
      );
      if (startPage > 3) {
        pageNumbers.push(
          <Button
            key='ellipsis-start'
            disabled
            sx={{
              margin: "0 2px",
              color: "#003366",
            }}
          >
            ...
          </Button>
        );
      }
    }

    // Adiciona botões de página
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={page === i ? "contained" : "text"}
          onClick={() => onPageChange(i)}
          sx={{
            color: page === i ? "white" : "#003366",
            backgroundColor: page === i ? "#003366" : "transparent",
            "&:hover": {
              backgroundColor: page === i ? "#002f6c" : "transparent",
            },
            margin: "0 2px",
          }}
        >
          {i}
        </Button>
      );
    }

    // Adiciona o botão da última página se não estiver visível
    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) {
        pageNumbers.push(
          <Button
            key='ellipsis-end'
            disabled
            sx={{
              margin: "0 2px",
              color: "#003366",
            }}
          >
            ...
          </Button>
        );
      }
      pageNumbers.push(
        <Button
          key={totalPages}
          variant={page === totalPages ? "contained" : "text"}
          onClick={() => onPageChange(totalPages)}
          sx={{
            color: page === totalPages ? "white" : "#003366",
            backgroundColor: page === totalPages ? "#003366" : "transparent",
            "&:hover": {
              backgroundColor: page === totalPages ? "#002f6c" : "transparent",
            },
            margin: "0 2px",
          }}
        >
          {totalPages}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        maxWidth: "lg",
        marginX: "auto",
      }}
    >
      <Button
        variant='contained'
        onClick={handlePrevious}
        disabled={page === 1}
        sx={{ backgroundColor: "#003366", marginRight: 1 }}
      >
        Previous
      </Button>
      {renderPageButtons()}
      <Button
        variant='contained'
        onClick={handleNext}
        disabled={page === totalPages}
        sx={{ backgroundColor: "#003366", marginLeft: 1 }}
      >
        Next
      </Button>
    </Box>
  );
}
