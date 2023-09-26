var dataPenyakits=[
  {
    "id": "2023-3275070005-K04.7-Juni",
    "kode": "K04.7",
    "nama": "Periapical abscess without sinus",
    "bulan": "Juni",
    "total": "25",
    "tahun": "2023",
    "id_wilayah": "3275070005"
  }
];

function FilterICD(datas,icd_id){
return datas.filter(d=> d.kode.includes(icd_id)) 
}



const asfafsfsa = (dataPenyakits).map(d =>{

  return {
    "id": d.kode+'-'+d.nama+'-'+d.bulan+'-'+d.tahun,
    "kode": d.kode,
    "nama": d.nama,
    "bulan":d.bulan,
    "total":d.total,
    "tahun": d.tahun,
    "id_wilayah": d.id_wilayah
  }
});



const EmptyTemplate =   [{
  "id": "",
  "kode": "",
  "nama": "",
  "bulan": "",
  "total": "",
  "tahun": "",
  "id_wilayah": ""
}]

var dataPenyakituu = Object.assign( 
  FilterICD(dataPenyakits,'B19'),
  FilterICD(dataPenyakits,'A09'),
  FilterICD(dataPenyakits,'A36'),
  FilterICD(dataPenyakits,'B05'),
  FilterICD(dataPenyakits,'G04.8'),
  FilterICD(dataPenyakits,'A01'),
  FilterICD(dataPenyakits,'B20'),
  FilterICD(dataPenyakits,'A91'),
  FilterICD(dataPenyakits,'A15'),
  FilterICD(dataPenyakits,'A16'),
  FilterICD(dataPenyakits,'A17'),
  FilterICD(dataPenyakits,'A18'),
  FilterICD(dataPenyakits,'A19'),
  );

  var dataPenyakit = dataPenyakits