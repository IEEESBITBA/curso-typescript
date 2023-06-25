import {readCSV} from 'danfojs-node';
import { DataFrame } from 'danfojs-node/dist/danfojs-base';

async function main() {
    let df: DataFrame;
    try {
        df = await readCSV('sales_data_sample.csv')
    } catch (e) {
        console.log('Ocurrió un error leyendo el archivo. Saliendo')
        return;
    }
    if (!!df) {
        df.head().print();
        // Imprime los primeros valores del archivo en formato de tabla.
        console.log('Media:', df.PRICEEACH.mean());
        // Accede a la columna PRICEEACH y encuentra la media.
        console.log('Mínimo:', df.PRICEEACH.min(), 'Máximo:', df.PRICEEACH.max());
        // Accede a la columna PRICEEACH y encuentra el mínimo y el máximo.
        let groupbyDealSize = df.groupby(['DEALSIZE']);
        // Agrupa por DEALSIZE
        groupbyDealSize.agg({'PRICEEACH': 'mean'}).print();
        // Imprime la media del PRICEEACH, agrupando por DEALSIZE
    }
}

main();
