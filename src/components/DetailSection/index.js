import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Select from '../Select';
import Input from '../Input';
import Section from '../Section';

const DetailSection = ({
  distNameOptions,
  distCenterOptions,
  paymentOptions,
  values,
}) => {
  const { distributorName, distributionCenter } = values;
  const isExtendedFormHidden = !distributorName || !distributionCenter;

  return (
    <Section title="Detail">
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Select
            name="distributorName"
            label="Name"
            options={distNameOptions}
            required
            disabled={!distNameOptions.length}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Select
            required
            name="distributionCenter"
            label="Distribution Center"
            {...(distributorName && { options: distCenterOptions })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} hidden={isExtendedFormHidden}>
        <Grid item xs={6}>
          <Select
            name="paymentType"
            label="Payment Type"
            options={paymentOptions}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            type="date"
            format="dd/mm/yyyy"
            name="expiredDate"
            label="Expired Date"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} hidden={isExtendedFormHidden}>
        <Grid item xs={10}>
          <Input name="notes" label="Notes" multiline rows={4} />
        </Grid>
      </Grid>
    </Section>
  );
};

DetailSection.propTypes = {
  distNameOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  distCenterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  paymentOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  values: PropTypes.shape({
    distributorName: PropTypes.string,
    distributionCenter: PropTypes.string,
  }),
};

export default DetailSection;
