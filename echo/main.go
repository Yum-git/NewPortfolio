package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"net/http"
)

func Hello(c echo.Context) error{
	return c.String(http.StatusOK, "Hello, World!!")
}

var db *sql.DB
func init(){
	db, _ = sql.Open("mysql", "")
}

func main(){
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	// e.Use(middleware.BasicAuth())

	e.GET("/", Hello)
	e.Start(":1000")
}
