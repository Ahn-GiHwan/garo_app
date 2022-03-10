import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

interface Idata {
  value: number;
  label: string;
}

function BoroughChart({showData, vertical}: {showData: Idata[]; vertical: boolean}) {
  const width = Dimensions.get('window').width - 70;
  const height = Dimensions.get('window').height - Dimensions.get('window').width;
  const mode = vertical ? height : width;
  return (
    <BarChart
      width={mode}
      rulesColor="black"
      initialSpacing={20} // 처음 막대 시작 간격
      spacing={20} // 막대 사이 간격
      barWidth={Platform.OS === 'ios' ? 39 : 45} // 막대 넓이
      noOfSections={5} // --- 생기는 단위
      barBorderRadius={5} // 막대 굽이
      frontColor="#C54A62"
      dashGap={1} // -- 이거 넓이
      data={showData}
      isAnimated
      showScrollIndicator={true}
    />
  );
}

export default BoroughChart;
