package product

import (
	"database/sql"
	"github.com/labstack/echo"
	"net/http"
	"../product"
)

func Start(e echo.Context) error{
	return e.String(http.StatusOK, "Hello, product!!")
}

func Create(db *sql.DB, e echo.Context) error{
	var request product.model.create
	return e.String(http.StatusOK, "H")
}