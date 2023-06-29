import React, { FunctionComponent, useState } from "react";
import FormPage from "~/components/PageWithBack";
import { FieldArray, ValidatedForm } from "remix-validated-form";
import { validator } from "~/schema/plot";
import {Avatar, Button, Grid, IconButton} from "@mui/material";
import { Input, Select } from "~/components/Fields";
import { LoadingButton } from "@mui/lab";
import AvatarAndName from "~/components/AvatarAndName";
import PlotStatusChip from "~/components/PlotStatusChip";

interface OwnProps {
  plot: any;
  approverList: any;
  plotStatusList: any;
  title: string;
}

type Props = OwnProps;

const PlotEdit: FunctionComponent<Props> = (props) => {
  const { plot, approverList, title,plotStatusList } = props;
  const [initialValues]: any = useState({
    plotStatusId: plot?.plotStatusId,
    approverId: "",
  });
  return (
    <FormPage title={title} contentSx={{ px: "32px" }}>
      <ValidatedForm
        validator={validator}
        method="post"
        defaultValues={initialValues}
        id="plot-edit-form"
        noValidate
      >
        <input name={'id'} type={'hidden'} value={plot.id}/>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Select
              required
              menuItems={plotStatusList}
              name={"plotStatusId"}
              label="Plot Status"
              helperText={""}
              customLabelFunc={(item)=> <PlotStatusChip statusRef={item.ref} value={item.label}/>}

            />
          </Grid>
          <Grid item md={4}>
            <Select
                required
                menuItems={approverList}
                name={"approverId"}
                label="Approver"
                helperText={""}
                customLabelFunc={(item)=> <AvatarAndName name={item.name}/>}
            />
          </Grid>
          <Grid item md={12}>
            <LoadingButton
              color="success"
              variant={"contained"}
              type={"submit"}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </ValidatedForm>
    </FormPage>
  );
};

export default PlotEdit;
