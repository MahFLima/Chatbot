function romanos(n) {
	var
		valores = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(var i = 6; num = valores[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if(n >= num) {
			// Número de letras repetidas
			var r = Math.floor(n / num); 

			// Nós subtraímos o atual
			n -= r * num; 

			if(r < 4){
				//Colocamos as Letras
				while(r--){
					res.push(letra);
				}
			} else {
				//Não pode ser repetido mais de 4 vezes
				val = res.pop(); // Última letra

				// Se for a string ou letra vazia == "M" (não há anterior)

			  // usamos a letra antes disso
				pos = (val ? letras.indexOf(val) : i) + 1; 

			  // E se letra == "M" -> letras [pos] não existir usamos M
				insert = letra + (letras[pos] || 'M'); 

				// Inserimos a string
				res.push(insert);
			}
		} else {
			// Se não vamos usar letra, colocamos ""
			// Entao não afeta pop
			res.push('');
		}
	}

	return res.join('');
}

romanos(57); // O numero Romano aparecerá de acordo com o valor inserido aqui.