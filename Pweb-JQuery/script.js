	$(document).ready(function(){

		alert('ini adalah tabel nama terbaik di ikmi')

		$('.nama').click(function(){

			alert('ini adalah kolom nama')

		let isi=$(this).text();

		//alert(isi);

		let isi2=prompt('ubah dengan nama: ',isi);
		if (!isi2) return;

		alert('nama berhasil diubah');

		$(this).text(isi2);

		//alert(isi2);
	});
		$('.alamat').click(function(){

			alert('ini adalah kolom alamat')
		let isi=$(this).text();

		//alert(isi);
		let isi3=prompt('ubah dengan alamat: ',isi);
		if (!isi3) return;

		alert('alamat berhasil diubah');

		$(this).text(isi3);

		//alert(isi3);
	});
		$('.hapus').click(function(){

			//alert(2)
			
			let yakin=confirm('yakin mau hapus?');
			if(!yakin)return;

			let id=$(this).prop('id');

			//alert(id);

			let rid = id.split('__');
			let baris_ke = rid[1];

			 //alert(baris_ke);
			
			$('#row__'+baris_ke).slideUp()
			
			//alert('anda yakin?');
		});
	});
