package main

import (
	"net/http"
)

type handler struct{}

func (h handler) base(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message":"hello,world"}`))
}

func main() {
	h := handler{}

	mux := http.NewServeMux()
	mux.HandleFunc("/", h.base)

	http.ListenAndServe(":5000", mux)
}
