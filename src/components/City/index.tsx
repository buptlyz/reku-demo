import { Select, Spin } from 'm-ui';
import { useRekuValue } from '@ks/reku';
import React, { useMemo } from 'react';
import { cityOptionsQuery } from '../../ddd/application';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
}

const City: React.FC<Props> = ({ value, onChange }) => {
  const cities = useRekuValue(cityOptionsQuery);
  const options = useMemo(() => {
      return cities.state === 'hasValue' ? cities.contents : [];
  }, [cities])

  return (
      <Spin spinning={cities.state === 'loading'}>
          <Select
              loading={cities.state === 'loading'}
              value={value}
              onChange={onChange}
              options={options}
          />
      </Spin>
  )
}

export default City;