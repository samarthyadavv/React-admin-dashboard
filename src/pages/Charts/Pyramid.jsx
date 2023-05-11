import React from 'react';
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend,
    AccumulationDataLabel,
    AccumulationTooltip,
    PyramidSeries,
    AccumulationSelection
} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

// Define the Pyramid component
const Pyramid = () => {
    // Use the current mode from the context provider
    const { currentMode } = useStateContext();

    return (
        // Wrap the component in a div with some styling
        <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            {/* Display a header for the chart */}
            <ChartsHeader category="Pyramid" title="Food Comparison Chart" />

            <div className="w-full">
                {/* Render the AccumulationChartComponent */}
                <AccumulationChartComponent
                    id="pyramid-chart"
                    legendSettings={{ background: 'white' }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    {/* Inject the necessary services */}
                    <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />

                    {/* Define the series data */}
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            name="Food"
                            dataSource={PyramidData}
                            xName="x"
                            yName="y"
                            type="Pyramid"
                            width="45%"
                            height="80%"
                            neckWidth="15%"
                            gapRatio={0.03}
                            explode
                            emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                            dataLabel={{
                                visible: true,
                                position: 'Inside',
                                name: 'text',
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    );
};

// Export the Pyramid component as the default export
export default Pyramid;
