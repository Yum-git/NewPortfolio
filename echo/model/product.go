package model

type ProductStruct struct {
	Title           string `json:"title"`
	Progress        string `json:"progress"`
	Contents        string `json:"contents"`
	Picture_path    string `json:"picture_path"`
	Tecnology_front string `json:"tecnology_front"`
	Tecnology_back  string `json:"tecnology_back"`
	Tecnology_infra string `json:"tecnology_infra"`
	Link            string `json:"link"`
}
