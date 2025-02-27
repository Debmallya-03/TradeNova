import React from "react";
import { Button, Card, CardContent, Typography, Divider, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "20px", textAlign: "center", mb: 3 }}>
        <Typography variant="h6">Instant, zero-cost fund transfers with UPI</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button component={Link} to="#" variant="contained" color="success">Add Funds</Button>
          <Button component={Link} to="#" variant="contained" color="primary">Withdraw</Button>
        </Box>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "20px" }}>
            <CardContent>
              <Typography variant="h6">Equity</Typography>
              <Divider sx={{ backgroundColor: "#555", my: 2 }} />

              {[
                { label: "Available margin", value: "4,043.10", highlight: true },
                { label: "Used margin", value: "3,757.30" },
                { label: "Available cash", value: "4,043.10" },
                { label: "Opening Balance", value: "4,043.10" },
                { label: "Opening Balance", value: "3,736.40" },
                { label: "Payin", value: "4,064.00" },
                { label: "SPAN", value: "0.00" },
                { label: "Delivery margin", value: "0.00" },
                { label: "Exposure", value: "0.00" },
                { label: "Options premium", value: "0.00" },
                { label: "Collateral (Liquid funds)", value: "0.00" },
                { label: "Collateral (Equity)", value: "0.00" },
                { label: "Total Collateral", value: "0.00" },
              ].map((item, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "space-between", py: 1, color: item.highlight ? "#4caf50" : "inherit" }}>
                  <Typography>{item.label}</Typography>
                  <Typography>{item.value}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "20px", textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6">You don't have a commodity account</Typography>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{ mt: 2 }}>Open Account</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Funds;
